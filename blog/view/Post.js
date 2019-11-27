import React from 'react';

async function fetchImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
}
class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 'https://via.placeholder.com/150'
        };
        async function addImage() {
            this.setState({ image: await fetchImage() })
        };
        const addImageHandler = addImage.bind(this);
        addImageHandler();

    }
    render() {
        return (
            <div className="card">
                <img src={this.state.image} />
            </div>
        )
    }
}
export default Post