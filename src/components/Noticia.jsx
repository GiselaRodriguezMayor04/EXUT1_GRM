import React, { useState } from 'react';  
import Card from '@mui/material/Card';  
import CardContent from '@mui/material/CardContent';  
import CardMedia from '@mui/material/CardMedia';   
import Typography from '@mui/material/Typography';  
import CardActionArea from '@mui/material/CardActionArea';   
import Box from '@mui/material/Box';  
import Avatar from '@mui/material/Avatar';  
import IconButton from '@mui/material/IconButton';  
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';  
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';   
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Dialog from '@mui/material/Dialog';

function Noticia({ noticia }) {
    const [isFavorite, setIsFavorite] = useState(false);   
    const [likes, setLikes] = useState(noticia.likesIniciales);
    const [shareEnabled, setShareEnabled] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleIconClick = () => {
        setIsFavorite(prev => !prev);   
        if (!isFavorite) {
            setLikes(likes + 1);
            setShareEnabled(true);
        } else {
            setLikes(likes - 1);
            setShareEnabled(false);
        }
    };

    const handleShareClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleShare = (platform) => {
        console.log(`Enviando por ${platform}...`);
        handleCloseDialog();
    };

    return (
        <Box sx={{ margin: "20px" }}>  
            <Card sx={{ maxWidth: 430 }}>  
                <Box sx={{ display: 'flex'}}>
                    <Avatar src={noticia.avatar} alt="Avatar" />
                    <Box sx={{ marginLeft: '10px', flexGrow: 1 }}>
                        <Typography variant="h6">
                            {noticia.titulo}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {noticia.fecha} 
                        </Typography>
                    </Box>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>

                <CardActionArea>  
                    <CardMedia sx={{ height: 194 }}   
                        component="img"   
                        image={noticia.imgSrc}  
                        alt={noticia.alt}   
                    />
                    <CardContent>  
                        <Typography variant="body2">  
                            {noticia.descripcion}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <Box sx={{ display: 'flex'}}>
                    <IconButton onClick={handleIconClick}>  
                        {isFavorite ? (   
                            <FavoriteRoundedIcon sx={{ color: "purple" }}/>   
                        ) : (   
                            <FavoriteBorderRoundedIcon sx={{ color: "black" }}/>   
                        )}
                    </IconButton>
                    <Typography sx={{ marginLeft: '10px' }}>{likes} likes</Typography>
                    <IconButton onClick={handleShareClick} disabled={!shareEnabled} sx={{ marginLeft: 'auto' }}>
                        <ShareIcon sx={{ color: shareEnabled ? "orange" : "black" }} />
                    </IconButton>
                </Box>
            </Card>
            
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6">Compartir</Typography>
                    <Typography>¿A través de qué plataforma quieres compartir?</Typography>
                    <IconButton onClick={() => handleShare("Whatsapp")}>
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton onClick={() => handleShare("Telegram")}>
                        <TelegramIcon />
                    </IconButton>
                </Box>
            </Dialog>
        </Box>
    );
}

export default Noticia;
