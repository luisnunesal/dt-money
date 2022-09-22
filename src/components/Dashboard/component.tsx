import { Container } from "./style";
import { Summary, TransactionsTable } from "..";

export function Dashboard() {
    return(
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    )
}