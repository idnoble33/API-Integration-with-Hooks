import React from 'react'
import { Store } from './Store'
import './index.css';

//App Component
export default function App():JSX.Element {
  const price = {
    totalPrice : 0
  }
  const {state, dispatch} = React.useContext(Store)

  //Checking if my array is empty
  React.useEffect(() => {
  state.communities.length === 0 && fetchDataAction()
  state.homes.length === 0 && fetchHomeDataAction()

  })
//Fetching the Data if empty array is validated
  const fetchDataAction = async () => {
    const URL = 'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities'
    const data = await fetch(URL)
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON
    })
  }
  
  const fetchHomeDataAction = async () => {
    const URL1 = 'https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes'
    const data = await fetch(URL1)
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_HOME_DATA',
      payload: dataJSON
    })
  }
  
  console.log(state)
  
return(
<React.Fragment>
<header className="header"><h2 style={{textAlign:"center"}}>The Community API call</h2></header>
     <div className="container imageWidth">
       <div className="row">
          <section className="community listWrap">         
            {state.communities.map((community: any) => {
              return(
                  <span className="col-md-6">
                 <ul  key={community.id} className="communityImage list">
               <li className="communityLi">
             <img src={community.imgUrl} alt={`The name ${community.name}` } /></li>
            <li>{community.name}</li>
             </ul>
              </span>
              )
           })}
        </section>
          </div>
              </div>
                <section>  
                <header className="header"><h2 style={{textAlign:"center"}}>Integrate Home Price with Total Price to UI </h2></header>
       
                    {state.homes.map((home: any) => {
                   return(
                  <ul key={home.id}> 
                      <li><span className="name"> Price: </span> 
                          <span className="number"> {home.price} </span> 
                      </li>
                       <li><span className="name"> Total Price: </span>
                          <span className="number">  {price["totalPrice"] += home["price"]}</span> 
                      </li>     
                </ul>
                );     
              })}
        </section>
</React.Fragment>

  );
}