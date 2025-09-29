import { section } from "framer-motion/client"
import "./Style.css"

export default function Footer(){
    return(
<footer>
  <div className="footer blur-background">
    <p>© 2025 Felipe Portes. Todos os direitos reservados.</p>
    <div className="socials">
      <a href="https://github.com/Lipefsk05" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/felipe-antunes-404398322" target="_blank">LinkedIn</a>
      <a href="mailto:felipefenske05@email.com">Email</a>
    </div>
  </div>
</footer>

    )
}