import { PageTitle } from '../component/page-header/PageTitle.tsx'

export const TransactionsPage = () => {
  return (
    <main>
      <PageTitle>Transactions</PageTitle>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <p>Transaction {i + 1}</p>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            mollitia obcaecati quo sit tempora. Animi aspernatur dignissimos
            earum exercitationem iusto, minus molestiae obcaecati, porro quo
            ratione repellendus tempore veritatis voluptates?
          </div>
        </div>
      ))}
    </main>
  )
}
