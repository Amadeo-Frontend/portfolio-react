import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros
      commodo tempor.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Amadeo-Frontend&show_icons=true&theme=codeSTACKr&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Amadeo-Frontend&layout=compact&langs_count=7&theme=github_dark" />
    </GithubSecao>
  </section>
)

export default Sobre
