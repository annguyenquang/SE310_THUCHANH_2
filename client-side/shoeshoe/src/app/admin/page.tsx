import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ProductList } from "../../../components/common/ProductList";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Grid2";

const AdminPage = () => {
    return (
        <Box padding={1}>
            <Container>
                <Grid2 container spacing={3}>
                    <TextField
                        fullWidth
                        label="Search"
                    />
                    <ProductList isAdmin></ProductList>
                </Grid2>
            </Container>
        </Box>
    );
}

export default AdminPage;