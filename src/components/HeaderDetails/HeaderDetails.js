import moment from 'moment'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { image_Url } from '../../constants/image_Url'
import { goToHome } from '../../routes/coordinator'
import { Content, Grafico, MainContainer, Overview, PosterBox, StaffList, Subtitle, TextBox, Title, Top } from './styled'
import { GetCredits } from '../../hooks/GetCredits';

const HeaderDetails = (detalhes) => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const generos = detalhes.detalhes.genres
  const [elenco, funcionarios] = GetCredits(params.id,location.pathname)

  const diretores = funcionarios.filter((cargo)=>{
    return cargo.job === "Director"
  })

  const produtores = funcionarios.filter((cargo)=>{
    return cargo.job === "Producer"
  })

  const convertMinsToHrsMins = ((minutes)=>{
    let h = Number(Math.floor(minutes / 60));
    let m = Number(minutes % 60);
    h = h < 10 ? '0' + h : h; 
    m = m < 10 ? '0' + m : m; 
    return `${h}h ${m}m`;
  })

  const nota = Number(detalhes.detalhes.vote_average)
  const notaRestante = Number(10-nota)

  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    hidden: true,
    datasets: [
      {
        data: [nota, notaRestante],
        backgroundColor: [
          '#14FF00',
          'rgba(255, 255, 255, 0.1)',
        ],
        borderColor: [
          '#14FF00',
          'rgba(255, 255, 255, 0.1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <MainContainer>
      <Top>
        <p>
          TMDB
        </p>
        <div onClick={()=>goToHome(navigate)}></div>
      </Top>
      <Content>
        <PosterBox>
          <img src={`${image_Url}/${detalhes.detalhes.poster_path}`}/>
        </PosterBox>
        <TextBox>
          {detalhes.detalhes.title ? 
          <Title>
          <h2>{detalhes.detalhes.title} ({moment(detalhes.detalhes.release_date).format("YYYY")})</h2>
          <Subtitle>
            <p>{moment(detalhes.detalhes.release_date).format("DD/MM/YYYY")} ({detalhes.detalhes.original_language.toUpperCase()}) • 
            </p>
            {generos.map((genero) => {
              return <p key={genero.id}>{genero.name} • </p>
            })}
            <p> {convertMinsToHrsMins(detalhes.detalhes.runtime)} </p>
          </Subtitle>
          <Grafico>
            <div>
              <Doughnut data={data}/>
            </div>
            <p>Avaliação dos usuários</p>
          </Grafico>
          </Title>
          :
            <div>Carregando informações</div>
          }
          
          <Overview>
            <strong> Sinopse </strong>
            <p>{detalhes.detalhes.overview}</p>
          </Overview>
          <StaffList>
            {diretores.length>0 ? diretores.map((diretor)=>{
              return <div key={diretor.id}>
                <p><strong>{diretor.name}</strong></p>
                <p>{diretor.job}</p>
              </div>
            }):<div></div>}
            {produtores.length>0 ? produtores.map((produtor)=>{
              return <div key={produtor.id}>
                <p><strong>{produtor.name}</strong></p>
                <p>{produtor.job}</p>
              </div>
            }):<div></div>}
          </StaffList>
        </TextBox>
      </Content>
    </MainContainer>
  )
}

export default HeaderDetails