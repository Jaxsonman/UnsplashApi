import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component{
    state = { images: [] }

    onSearchSubmit = async (term) =>{
        const response = await unsplash.get('/search/photos', {
            params: { 
                query: term,
                per_page: 25,
            },
            
        })

        this.setState({ images: response.data.results })
    }


    render(){
        console.log(this.state.images)
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App