import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Amadeo Bon</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Amadeo-Frontend
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Front end Developer
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
