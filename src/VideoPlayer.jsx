    
import { Grid, Box, Heading } from "@chakra-ui/react"
import { SocketContext } from "./Context"
import { useEffect,useContext } from "react"

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
    useEffect(() => {
        if (myVideo && stream) {
            myVideo.srcObject = stream;
        } else {
            console.error('Video element or stream not found.');
        }
    }, [myVideo, stream]);

return (
    <Grid justifyContent="center" templateColumns='repeat(2, 1fr)' mt="12">
           
        {
            stream && (
                <Box>
                    <Grid colSpan={1}>
                        <Heading as="h5">
                            {name || 'Name'}
                        </Heading>
                        <video playsInline muted ref={myVideo} autoPlay width="600" />
                    </Grid>
                </Box>
            )
        }
             
        {
            callAccepted && !callEnded && (
                <Box>
                    <Grid colSpan={1}>
                        <Heading as="h5">
                            {call.name || 'Name'}
                        </Heading>
                        <video playsInline ref={userVideo} autoPlay width="600" />
                    </Grid>
                </Box>
            )
        }
    </Grid>
)
}
    export default VideoPlayer
