import Layout from "@/components/Layout";
import Main from "./Main";
import { useSession, signIn, signOut } from "next-auth/react";

const HomePage = () => {


    const { data : session, status} = useSession();

    const handleSignInClick = () => {
        signIn(); // Trigger sign-in when the button is clicked
    };

    const paragraphStyle = {
        fontSize: '36px',
        color: 'red',
        fontWeight: 'bold',      // Make text bold
        textAlign: 'center',     // Center text horizontally
        padding: '20px',         // Add padding around the text
        border: '2px solid blue', // Add a border around the text
        borderRadius: '10px',    // Rounded corners for the border
        backgroundColor: 'lightblue', // Background color
        margin: '20px',          // Add margin around the paragraph
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Add a box shadow
    };

    if(status === 'authenticated'){      
        return (
            <Layout>
                <Main />
            </Layout>
        );
    }else{
        return(
            <div>
                <p style={paragraphStyle}>You are not Signed IN</p>
                <button
                    onClick={handleSignInClick}
                    style={{
                        backgroundColor: 'blue', // Change to your desired background color
                        color: 'white', // Change to your desired text color
                        padding: '10px 20px', // Change to your desired padding
                        borderRadius: '5px', // Change to your desired border radius
                        cursor: 'pointer', // Add a pointer cursor on hover
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 20px'
                    }}
                >
                    Sign In
                </button>

                <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold'}}>OR</p>

                <a href={"/signup"} style={{ textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center'}}>
                    SignUP
                </a>
            </div>
        );
    }
};

export default HomePage;
