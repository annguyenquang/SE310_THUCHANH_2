import Dialog from "@mui/material/Dialog";
import { useEditProductDialogStore } from "../../core/store/EditProductDialogStore"
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import AttachMoneyOutlined from "@mui/icons-material/AttachMoneyOutlined";
import DialogActions from "@mui/material/DialogActions";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React from "react";

type EditProductDialogProps = {
}

export const EditProductDialog: React.FC<EditProductDialogProps> = () => {
    const store = useEditProductDialogStore();
    function closeDialog(): void {
        store.setDialogState(false);
    }

    return (
        <Dialog open={store.open}>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogContent>
                <DialogContentText>After input new value, please click on Save change</DialogContentText>
                <TextField autoFocus required margin='dense' variant='outlined' fullWidth label="Name" value={store.product?.name}></TextField>
                <TextField autoFocus required margin='dense' variant='outlined' fullWidth label="Brand" value={store.product?.brand}></TextField>
                <TextField autoFocus required margin='dense' variant='outlined' fullWidth label="Price" type='number' value={store.product?.price} slotProps={{
                    input: {
                        startAdornment: <AttachMoneyOutlined></AttachMoneyOutlined>
                    }
                }}></TextField>
                <TextField autoFocus required margin='dense' variant='outlined' fullWidth label="Stock" type='number' value={store.product?.stock}></TextField>

            </DialogContent>
            <DialogActions>
                <ButtonGroup variant="contained" aria-label="">
                    <Button onClick={closeDialog} color='warning'>Cancel</Button>
                    <Button>Save changes</Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>
    )
}
