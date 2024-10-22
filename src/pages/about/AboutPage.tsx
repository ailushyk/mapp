import { Box } from '@/components/box/Box.tsx'
import { InfoMessage } from '@/components/info-message/InfoMessage.tsx'
import { Link } from '@/components/link/Link.tsx'
import { GitHubIcon } from '@/icons/github.tsx'
import { PageTitle } from '../../components/page-title/PageTitle.tsx'

export default function AboutPage() {
  return (
    <main>
      <PageTitle>About</PageTitle>
      <Box flex="column">
        <p>
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
    </main>
  )
}
