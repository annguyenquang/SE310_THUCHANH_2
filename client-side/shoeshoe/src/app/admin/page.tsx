import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ProductList } from "../../../components/common/ProductList";

const AdminPage = () => {
    return (
        <Box>
            <TextField
                fullWidth
                label="Search"
            />
            <ProductList></ProductList>
        </Box>
    );
}

export default AdminPage;