import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import PrimarySearchAppBar from "./Header";

import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
};

 

const PdfCard = ({onDelete, onDownload, fileName, onCopyLink}) => {
    const fileType = fileName.split(".").splice(-1)[0] ; 
    let image_link = "" ;
    if (fileType == "pdf") {
        image_link = "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
    } else if (fileType == "jpeg" || fileType == "jpg") {
        image_link = "https://images.freeimages.com/fic/images/icons/2711/free_icons_for_windows8_metro/512/jpg.png"
    }else if (fileType == "txt") {
        image_link = "https://cdn-icons-png.flaticon.com/512/104/104647.png" ;
    }
    return (
        <Card sx={{ maxWidth: 250    }}>
         
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image_link}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {fileName}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={onDelete}>
                    Delete
                </Button>
                <Button size="small" color="primary" onClick={onDownload}>
                    Download
                </Button>
                <Button size="small" color="primary" onClick={onCopyLink}>
                    Link
                </Button>
            </CardActions>
        </Card>
    );
};
export default PdfCard;
