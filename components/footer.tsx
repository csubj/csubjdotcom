import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28">
          <h1>Made with Love on the Internet.</h1>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
