import { GitHubIcon } from '@/icons/github.tsx'
import { Box } from '@/ui/box/Box.tsx'
import { Container } from '@/ui/container/Container.tsx'
import { InfoMessage } from '@/ui/info-message/InfoMessage.tsx'
import { Link } from '@/ui/link/Link.tsx'
import { PageTitle } from '../../components/page-title/PageTitle.tsx'

export default function AboutPage() {
  return (
    <Container>
      <PageTitle>About</PageTitle>
      <Box flex="column">
        <p className="text-center">
          This is a simple app for managing your money. You can add
          transactions, filter them, and see your balance.
        </p>

        <InfoMessage>
          <Link
            href="https://github.com/ailushyk/mapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon /> GitHub
          </Link>
        </InfoMessage>
      </Box>
    </Container>
  )
}
