import styled from "styled-components"

const About = ()=>{
    return <Wrapper>
        <h3>About Us</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto veniam accusantium sint quis nulla eaque aliquid eveniet molestias dolores voluptatem, odio repellendus provident perspiciatis dolore!</p>
    </Wrapper>
}

const Wrapper = styled.section`
    
    h3 {
        letter-spacing: 1px;
        font-size: 1.3rem;
    }
    p{
        line-height: 1.5;
        margin-top: 20px;
    }
`

export default About