import Layout from '../../components/Layout';
import {useRouter} from 'next/router';


const profile = () =>{
    const router = useRouter();
    return(
        <Layout>
            <p>Hello, my name is {router.query.name}. I use next.js</p>
        </Layout>
    )
}


export default profile
