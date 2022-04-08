import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    position: relative;
    width: 400px;
`;
const CardImage = styled.div`
    height: 400px;
    width: 100%;
    border-radius:8px;
`;
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit:cover;
    border-radius:inherit;
`;
const CardContent = styled.div`
    position: absolute;
    transform: translate(-50%, 50%);
    background-color: white;
    width: 363px;
    height: 127px;
    left: 50%;
    border-radius: 20px;
    padding: 20px;
    z-index: 10;
    bottom: 0;

`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

`;
const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit:cover;
    flex-shrink: 0;
`;
const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    color: black;

`;
const CardNumber = styled.span`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip:text ;
`;
const UserName = styled.span `
    font-weight: 300;
    font-size: 16px;
    color: #333;
`;

const Card = () => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://cdn.dribbble.com/users/310241/screenshots/17200080/media/b4d0390106d49fe866815c93d6dcf927.jpg?compress=1&resize=1200x900&vertical=top" alt="" />
            </CardImage>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <UserAvatar src="https://cdn.dribbble.com/users/759083/screenshots/17188142/media/b6466271f1a2d69ebc50539d993a8877.jpg?compress=1&resize=800x600&vertical=top" alt="" />
                        <UserName>@zndrson</UserName>
                    </CardUser>
                    <div>256</div>
                </CardTop>
                <CardFooter>
                    <CardTitle>Cosmic Perspective</CardTitle>
                    <CardNumber>12,000 PSL</CardNumber>
                </CardFooter>
            </CardContent>
        </StyledCard>
    );
};

export default Card;