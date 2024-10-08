import {SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function SignUpPage(){
    return (
        <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={5}
    >
        <Box marginBottom={3}>
        <Typography variant="h4">Sign in to LingoDeck</Typography>
        </Box>
        <SignIn />
        </Box>
    )
}
        
        {/*<Container maxWidth='lg'>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6' sx={{
                        flexGrow: 1
                    }}>
                        LingoDeck
                    </Typography>
                    <Button color="inherit">
                        <Link href={"/sign-in"} passHref>
                            Sign In
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href={"/sign-up"} passHref>
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Typography variant="h4">Sign In</Typography>
                <SignIn />

            </Box>
        </Container>*/}