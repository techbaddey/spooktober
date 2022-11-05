import {useState, useRef} from 'react'
// import useFetch from './fetch'
import {
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import spooky from './spooky.png'
import spoone from './spoone.png'
import spootwo from './spootwo.png'
import spoothree from './spoothree.png'
import spoofour from './spoofour.png'
import spoofive from './spoofive.png'
import spoosix from './spoosix.png'
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback({resetErrorBoundary}) {
  return (
    <div role="alert" style={{lineHeight:"40px"}}>
      <div className='fallback'>
        <p> 🔒 <br/>...Would be available only on October 2023 👻 </p>
        <button className="nav_btn2" onClick={resetErrorBoundary} >Okay</button> 
      </div>
    </div>
  )
}

function SpookOne() {
  return (
    <div role="alert" style={{lineHeight:"40px"}}>
      <div className="btn">
     <p> 
      <NavLink to="/scareordare">
      <button className="nav_btn" onClick={Scaredare}>Game (Scare or Dare)</button>
      </NavLink>  
     </p>
        <NavLink to="/taleone">
      <button className="nav_btn">Read A Tale</button> 
        </NavLink>    
    </div>
    </div>
  )
}

function SpookTwo() {
  return (
    <div role="alert" style={{lineHeight:"40px"}}>
      <div className="btn">
     <p> 
      <NavLink to="/scareordareone">
      <button className="nav_btn">Game (Scare or Dare)</button>
      </NavLink>  
     </p>
        <NavLink to="/taletwo">
      <button className="nav_btn">Read A Tale</button> 
        </NavLink>    
    </div>
    </div>
  )
}

function SpookThree() {
  return (
    <div role="alert" style={{lineHeight:"40px"}}>
      <div className="btn">
     <p> 
      <NavLink to="/scareordaretwo">
      <button className="nav_btn">Game (Scare or Dare)</button>
      </NavLink>  
     </p>
        <NavLink to="/talethree">
      <button className="nav_btn">Read A Tale</button> 
        </NavLink>    
    </div>
    </div>
  )
}


export const Testerror=()=>{
  const [username, setUsername] = useState('')
  const usernameRef = useRef(null)
  
  function Testerror({username}) {
  if (username === '01/10/2022') {
    return SpookOne()
  }
  else if (username === '02/10/2022') {
    return SpookTwo()
  }
  else if (username === '03/10/2022') {
    return SpookThree()
  }
  else if (username === '04/10/2022') {
    return SpookOne()
  }
  else if (username === '05/10/2022') {
    return SpookTwo()
  }
  else if (username === '06/10/2022') {
    return SpookThree()
  }
  else if (username === '07/10/2022') {
    return SpookOne()
  }
  else if (username === '08/10/2022') {
    return SpookTwo()
  }
  else if (username === '09/10/2022') {
    return SpookThree()
  }
  else if (username === '02/10/2022') {
    return SpookOne()
  }
  else if (username === '10/10/2022') {
    return SpookTwo()
  }
  else if (username === '11/10/2022') {
    return SpookThree()
  }
  else if (username === '12/10/2022') {
    return SpookOne()
  }
  else if (username === '13/10/2022') {
    return SpookTwo()
  }
  else if (username === '14/10/2022') {
    return SpookThree()
  }
  else if (username === '15/10/2022') {
    return SpookOne()
  }
  else if (username === '16/10/2022') {
    return SpookOne()
  }
  else if (username === '17/10/2022') {
    return SpookTwo()
  }
  else if (username === '18/10/2022') {
    return SpookThree()
  }
  else if (username === '19/10/2022') {
    return SpookOne()
  }
  else if (username === '20/10/2022') {
    return SpookTwo()
  }
  else if (username === '21/10/2022') {
    return SpookThree()
  }
  else if (username === '22/10/2022') {
    return SpookOne()
  }
  else if (username === '23/10/2022') {
    return SpookTwo()
  }
  else if (username === '24/10/2022') {
    return SpookThree()
  }
  else if (username === '25/10/2022') {
    return SpookOne()
  }
  else if (username === '26/10/2022') {
    return SpookTwo()
  }
  else if (username === '27/10/2022') {
    return SpookThree()
  }
  else if (username === '28/10/2022') {
    return SpookOne()
  }
  else if (username === '29/10/2022') {
    return SpookTwo()
  }
  else if (username === '30/10/2022') {
    return SpookThree()
  }
  else if (username === '31/10/2022') {
    return SpookOne()
  }
    else if (username === '01/10/2023') {
     throw new Error('')
   }
    else if (username === '02/10/2023') {
     throw new Error('')
   }
  else if (username === '03/10/2023') {
    throw new Error('')
  }
  else if (username === '04/10/2023') {
    throw new Error('')
  }
  else if (username === '05/10/2023') {
    throw new Error('')
  }
  else if (username === '06/10/2023') {
    throw new Error('')
  }
  else if (username === '07/10/2023') {
    throw new Error('')
  }
  else if (username === '08/10/2023') {
    throw new Error('')
  }
  else if (username === '09/10/2023') {
    throw new Error('')
  }
  else if (username === '02/10/2023') {
    throw new Error('')
  }
  else if (username === '10/10/2023') {
    throw new Error('')
  }
  else if (username === '11/10/2023') {
    throw new Error('')
  }
  else if (username === '12/10/2023') {
    throw new Error('')
  }
  else if (username === '13/10/2023') {
    throw new Error('')
  }
  else if (username === '14/10/2023') {
    throw new Error('')
  }
  else if (username === '15/10/2023') {
    throw new Error('')
  }
  else if (username === '16/10/2023') {
    throw new Error('')
  }
  else if (username === '17/10/2023') {
    throw new Error('')
  }
  else if (username === '18/10/2023') {
    throw new Error('')
  }
  else if (username === '19/10/2023') {
    throw new Error('')
  }
  else if (username === '20/10/2023') {
    throw new Error('')
  }
  else if (username === '21/10/2023') {
    throw new Error('')
  }
  else if (username === '22/10/2023') {
    throw new Error('')
  }
  else if (username === '23/10/2023') {
    throw new Error('')
  }
  else if (username === '24/10/2023') {
    throw new Error('')
  }
  else if (username === '25/10/2023') {
    throw new Error('')
  }
  else if (username === '26/10/2023') {
    throw new Error('')
  }
  else if (username === '27/10/2023') {
    throw new Error('')
  }
  else if (username === '28/10/2023') {
    throw new Error('')
  }
  else if (username === '29/10/2023') {
    throw new Error('')
  }
  else if (username === '30/10/2023') {
    throw new Error('')
  }
  else if (username === '31/10/2023') {
    throw new Error('')
  }
  
  }
  
  return( <div className="main-body">
    <p className="main-text" style={{textAlign:"center", fontSize:"35px" }}>Spooktober</p>
    <div className="container">
    <label>
      <p style={{color: "grey", textAlign:"center"}}>Take these daily challenges with friends throughout the days in october</p>
      <img style={{margin:"5px auto"}} src={spooky} width="120px" height="120px"/>
  
      <p style={{color: "grey", textAlign:"center"}}>enter todays date (must be a day in october</p>
      <input placeholder={`e.g  01/10/2022`} value={username} onChange={e => setUsername(e.target.value)} ref={usernameRef} />
      </label>
    <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername('')
            usernameRef.current.focus()
          }}
          resetKeys={[username]}
        >
      <Testerror username={username} />
      </ErrorBoundary>
    </div>
  </div>
        )
}

function Scaredare() {
  return (
    <div className='challenges'>
      <div>
      <div className='challenge'>
        <p style={{color:"#FDC739", textAlign:"center", marginBottom:"10px"}}> Scare or Dare
          <br/>Instruction: take turns in selecting the icons below to reveal a scare or dare question</p>
        <button className="scare-btn" onClick={() => alert('Go outside and howl at the moon (or sun) like a werewolf.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Try to scare someone in the room without them knowing before your next turn.')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Laugh like an evil witch at whatever people say for the next five minutes.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Take a walk down the street alone and talk to yourself.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Take a scary selfie with some of your friends.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Try to scare someone in the room without them knowing before your next turn. ')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Spin around in a circle 10 times and try to walk in a straight line. ')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Throughout the day, when people walk up to you, act surprised that they can see you')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Act as if the people around you are invisible.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Moonwalk everywhere you go, throughout the day.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Call a friend aand pick up a serious fight with them.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('say GHOST after every sentence you make throughout the day')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go to your neighbour an ask if they would adopt you.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Pretend that you and someone else inthe room are a couple for the rest of the game')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Make a song about the person to your right in the tune of ABC rhythm')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Call a stranger and tell them a secret.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go outside and try to summon the rain.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Let the group post anything they want on your social media.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Text your mom or dad something true and embarrassing.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Make an eye contact with a stranger and hold it for 30 seconds')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Close your eyes, pick a random number from your contact and tell the person your darkest secret.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Call the 26th number in your contact listand convince them that you are having a baby/ you are pregnant.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Send your last screenshot to five friends')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Let the person in front of you go through your phone.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go outside, wave and say Hi to everyone you see, for the next 5minutes.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Everything you say for the next 15mins must be sang to the tune of Happy Birthday...')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Eat a mouthful of crackers/snacks and then try to whistle.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Call the 2nd person on your contact list and talk to them for 5mins without closing your mouth.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Take an embarrassing selfie and post to your social media.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Talk to a illow like it is your crush.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Call your crush and tell him/her how you feel.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Pick a person in the room and tel them a secret you have hiding from them.')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Pretend you’re a witch, and cast a spell on someone. ')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go outside and yell “I believe in vampires” three times really loud.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Pretend to read the palm of the person to your right – guess what their future will hold.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Laugh like an evil witch at whatever people say for the next five minutes.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        
      </div>
      
      <p> 
      <NavLink to="/">
      <button className="home-btn">🔙</button>
      </NavLink>  
     </p>
      </div>
    </div>
  )
}
function Scaredareone() {
  return (
    <div className='challenges'>
      <div>
      <div className='challenge'>
        <p style={{color:"#FDC739", textAlign:"center", marginBottom:"10px"}}> Scare or Dare
          <br/>Instruction: take turns in selecting the icons below to reveal a scare or dare question</p>
<button className="scare-btn" onClick={() => alert('Try to scare someone in the room without them knowing before your next turn. ')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Take a scary selfie with some of your friends.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Take a walk down the street alone and talk to yourself.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Laugh like an evil witch at whatever people say for the next five minutes.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
       <button className="scare-btn" onClick={() => alert('Try to scare someone in the room without them knowing before your next turn.')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go outside and howl at the moon (or sun) like a werewolf.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('say GHOST after every sentence you make throughout the day')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
      <button className="scare-btn" onClick={() => alert('Call a friend aand pick up a serious fight with them.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Moonwalk everywhere you go, throughout the day.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
     <button className="scare-btn" onClick={() => alert('Act as if the people around you are invisible.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Throughout the day, when people walk up to you, act surprised that they can see you')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Spin around in a circle 10 times and try to walk in a straight line. ')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Let the group post anything they want on your social media.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
 <button className="scare-btn" onClick={() => alert('Go outside and try to summon the rain.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
     <button className="scare-btn" onClick={() => alert('Call a stranger and tell them a secret.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
      <button className="scare-btn" onClick={() => alert('Make a song about the person to your right in the tune of ABC rhythm')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
     <button className="scare-btn" onClick={() => alert('Pretend that you and someone else inthe room are a couple for the rest of the game')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go to your neighbour an ask if they would adopt you.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
       <button className="scare-btn" onClick={() => alert('Let the person in front of you go through your phone.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Send your last screenshot to five friends')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Call the 26th number in your contact listand convince them that you are having a baby/ you are pregnant.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
<button className="scare-btn" onClick={() => alert('Close your eyes, pick a random number from your contact and tell the person your darkest secret.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Make an eye contact with a stranger and hold it for 30 seconds')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Text your mom or dad something true and embarrassing.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
      <button className="scare-btn" onClick={() => alert('Talk to a illow like it is your crush.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
   <button className="scare-btn" onClick={() => alert('Take an embarrassing selfie and post to your social media.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>  
<button className="scare-btn" onClick={() => alert('Call the 2nd person on your contact list and talk to them for 5mins without closing your mouth.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Eat a mouthful of crackers/snacks and then try to whistle.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
 <button className="scare-btn" onClick={() => alert('Everything you say for the next 15mins must be sang to the tune of Happy Birthday...')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go outside, wave and say Hi to everyone you see, for the next 5minutes.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
       <button className="scare-btn" onClick={() => alert('Laugh like an evil witch at whatever people say for the next five minutes.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Pretend to read the palm of the person to your right – guess what their future will hold.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
       <button className="scare-btn" onClick={() => alert('Go outside and yell “I believe in vampires” three times really loud.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
       <button className="scare-btn" onClick={() => alert('Pretend you’re a witch, and cast a spell on someone. ')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>    
       <button className="scare-btn" onClick={() => alert('Pick a person in the room and tel them a secret you have hiding from them.')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
     <button className="scare-btn" onClick={() => alert('Call your crush and tell him/her how you feel.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
      </div>
      
      <p> 
      <NavLink to="/">
      <button className="home-btn">🔙</button>
      </NavLink>  
     </p>
      </div>
    </div>
  )
}
function Scaredaretwo() {
  return (
    <div className='challenges'>
      <div>
      <div className='challenge'>
        <p style={{color:"#FDC739", textAlign:"center", marginBottom:"10px"}}> Scare or Dare
          <br/>Instruction: take turns in selecting the icons below to reveal a scare or dare question</p>
        <button className="scare-btn" onClick={() => alert('Try to scare someone in the room without them knowing before your next turn.')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        
        <button className="scare-btn" onClick={() => alert('Go outside and howl at the moon (or sun) like a werewolf.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Take a walk down the street alone and talk to yourself.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        
        <button className="scare-btn" onClick={() => alert('Laugh like an evil witch at whatever people say for the next five minutes.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Try to scare someone in the room without them knowing before your next turn. ')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        
        <button className="scare-btn" onClick={() => alert('Take a scary selfie with some of your friends.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Throughout the day, when people walk up to you, act surprised that they can see you')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Spin around in a circle 10 times and try to walk in a straight line. ')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Moonwalk everywhere you go, throughout the day.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Act as if the people around you are invisible.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('say GHOST after every sentence you make throughout the day')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Call a friend aand pick up a serious fight with them.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Pretend that you and someone else inthe room are a couple for the rest of the game')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go to your neighbour an ask if they would adopt you.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
       <button className="scare-btn" onClick={() => alert('Call a stranger and tell them a secret.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Make a song about the person to your right in the tune of ABC rhythm')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Let the group post anything they want on your social media.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go outside and try to summon the rain.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
       <button className="scare-btn" onClick={() => alert('Make an eye contact with a stranger and hold it for 30 seconds')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Text your mom or dad something true and embarrassing.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Call the 26th number in your contact listand convince them that you are having a baby/ you are pregnant.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Close your eyes, pick a random number from your contact and tell the person your darkest secret.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Let the person in front of you go through your phone.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Send your last screenshot to five friends')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Everything you say for the next 15mins must be sang to the tune of Happy Birthday...')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Go outside, wave and say Hi to everyone you see, for the next 5minutes.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
       <button className="scare-btn" onClick={() => alert('Call the 2nd person on your contact list and talk to them for 5mins without closing your mouth.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Eat a mouthful of crackers/snacks and then try to whistle.')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Talk to a illow like it is your crush.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Take an embarrassing selfie and post to your social media.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Pick a person in the room and tel them a secret you have hiding from them.')}>
        <img style={{margin:"8px"}} src={spootwo} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Call your crush and tell him/her how you feel.')}>
        <img style={{margin:"8px"}} src={spoone} width="50px" height="50px"/>
      </button>
        <button className="scare-btn" onClick={() => alert('Go outside and yell “I believe in vampires” three times really loud.')}>
        <img style={{margin:"8px"}} src={spoofour} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Pretend you’re a witch, and cast a spell on someone. ')}>
        <img style={{margin:"8px"}} src={spoothree} width="50px" height="50px"/>
</button>
         <button className="scare-btn" onClick={() => alert('Laugh like an evil witch at whatever people say for the next five minutes.')}>
        <img style={{margin:"8px"}} src={spoosix} width="50px" height="50px"/>
</button>
        <button className="scare-btn" onClick={() => alert('Pretend to read the palm of the person to your right – guess what their future will hold.')}>
        <img style={{margin:"8px"}} src={spoofive} width="50px" height="50px"/>
</button>
       
      </div>
     
      <p> 
      <NavLink to="/">
      <button className="home-btn">🔙</button>
      </NavLink>  
     </p>
      </div>
    </div>
  )
}

function Taleone() {
  return(
    <div className='challenges'><div>
    <div className='challenge'>
      
    <p style={{color:"#FDC739"}}>There's this my neighbor that hates me so much.<br/>
His name was Jidenna, and he never responds to my greetings.
This was because I killēd his brown dog last month after I hit a wooden plank on its head. <br/>
Jidenna—my neighbor—wasn't pleased when he learned I had killēd his dog just a week after he moved into our house.
He swore angrily, to call the police on me, to arrest me, the reason being that he had been with that dog for years even before he moved into our building, and had spent thousands if not millions of naira on the dog.<br/>
He didn't mind at all that I was his landlord's son.<br/>
I won't lie, Jidenna had a beautiful bond with the dog—a German Shepherd. And, everyone in our streets also liked the goofy dog.<br/>
That day, my father and I pleaded with Jidenna not to involve the police in the case.<br/>
He decided to drop it after I explained that I killēd the dog in self-defense because it wanted to bite me.<br/>
"I had whacked it on the head with the wood because it had chased after me; I knew it wanted to bite me," I explained to Jidenna and everyone.<br/>
My father and I agreed to pay Jidenna the sum of 250 thousand naira for the dog although he claimed he spent close to a million on buying it and had drained his bank account to feed it.<br/>
We paid him one hundred thousand naira that day and promised to pay the rest later.<br/>
Yesterday, Jidenna collected the last of the money—forty thousand naira. <br/>
"You're lucky," he mumbled as he pocketed the cash. "If I had involved the police, you would have paid me close to a million for killīng my dog." <br/>
"Thank you, sir," I muttered. "I didn't mean to do it. It was just self-defense." <br/>
When he left, I retreated into our room and took a very deep breath. <br/>
The truth was, I didn't kīll Jidenna's dog in self-defense. It was just too good at digging up the bones of the children I had buried in our backyard.</p>
    </div>
      <p> 
      <NavLink to="/">
      <button className="home-btn">🔙</button>
      </NavLink>  
     </p>
    </div>
    </div>
  )
}

function Taletwo (){
  return(
    <div className='challenges'><div>
    <div className='challenge'>
      
    <p style={{color:"#FDC739"}}>Arike knew how to kīll a man.<br/>
She had the perfect talent of making on angry and sad at the same time.<br/>
And, it was very easy for her to do that since she was my daughter.<br/>
Just like when she hindered me from traveling out of the country for a conference because she had used a marker to display her artistic skills on my visa. It happened on the night before the day, and she was just four then.<br/>
And also, like when she burned half of our duplex to the ground while frying plantain, and we had to spend the rest of the year rebuilding. She was fifteen then, and she claimed she didn’t like the soup her mother had prepared.<br/>
Just like the night she aaid she would be sleeping over at her best friend’s house, only for me to be called hours later by the police, saying they rounded her up with the others in a shabby night club. She was twenty-one then, and claimed it was a just a birthday party. <br/>
Arike, my daughter, had broken my heart many times, but none topped the one she did newly, at the age of twenty-eight.
Now, she was at the altar with her husband; I couldn’t bear to watch them.<br/>
But there was nothing I could do, so, I just sat on a pew amid the crowded church, my nose tingling at the harsh scent of the hundred different perfumes they had drenched their sweaty bodies with.<br/>
My heart wrenched with sadness as I sat there, reflecting on Arike’s brutal disobedience, yet, as I looked to the altar again, I couldn’t help but confess to myself that she has never looked more beautiful and perfect than she did today. <br/>
Her white gown was devoid of any spot as it radiated brilliantly, almost reflecting the rays of lights from the thousand chandeliers hung on the church’s ceilings. Her mother, my wife, had ordered it for her from a store in China and it arrived just in time for the occasion. <br/>
Her shoes were lightweight but original and pretty, and they clung to her feet like they had always been there, like she was born with them. <br/>
Her makeup was flawless, and a bad she ironically looked younger.<br/>
Everything was perfect, even the way her husband stooped low, his back curving as he leaned over her golden coffin carved out of pure mahogany wood, so that the photographer would take a picture, the last picture of them together. <br/>
“Why were you so stubborn?” I whispered again as tears rolled down my face.<br/>
It was barely a month that Arike had gotten married on this same altar, and barely a week since she told me she wanted to attend a distant friend’s birthday party, and although I told her not to, to stay back and enjoy her new marriage, she had gone, and her car had collided with another car on the highway. Her driver had hit his head on the steering-wheel, his brain splattering everywhere. He diēd on the spot. Arike was rushed to a nearby hospital where her soul snuck out to meet her driver's.</p>
      </div>
      <p> 
      <NavLink to="/">
      <button className="home-btn">🔙</button>
      </NavLink>  
     </p>
    </div>
    </div>
  )
}
function Talethree (){
  return(
        <div className='challenges'><div>
    <div className='challenge'>
    <p style={{color:"#FDC739"}}>I went to visit my best friend yesterday. <br/>
I didn't call him as I wanted to surprise him. 
For minutes after I reached his house, I knocked on the door but no one answered. <br/>
I reached for the doorknob and turning it over, I realized that the door was open. <br/>
Since my best friend and I were allowed into each other's house, I didn't hesitate to enter. 
I assumed that he and his wife were upstairs and probably didn't hear me knocking. <br/>
I walked down their long corridor – the one that led into their big parlor. 
When I stepped into the parlor, I was barraged with the sweet smell of the assorted dishes lined up on their parlor's table. <br/>
There were soup, rice, stew, pepper-soup, porridge yam, and even baked goodies like cake, meat pie, and sausage rolls. 
It was as if they were planning a small party or they were hosting people.<br/>
I took a seat on one of the soft cushions in the parlor, and I helped myself to one pie, chewing it quickly as it was burning hot. <br/>
Less than a minute later, my best friend's wife ambled down the curved staircase, the small piece of a towel wrapped around her body barely covering her womanhood. <br/>
With mashed pie still in my mouth, I gawked at her, my eyes bleēding with lust as I took her in. <br/>
I could already feel the flesh in-between my legs hardening with want. <br/>
"Ahh! I can see that you're already helping yourself," she said, a sweet smile wrinkling her pretty face. <br/>
"Uh? Yea–yes," I stuttered, fumbling around in embarrassment. "Is your husband around?"<br/>
I wished with the utmost intensity that she would say no. I hoped my best friend was not at home so I would spend some sweet time with his wife. <br/>
"Yes, he is," she answered. My face fell with disappointment. "Take," she said, handing me a bottle of cold water. 
"Can I take more pie?" I asked shyly. I was kind of embarrassed that I asked for her permission now even though I've eaten one already. <br/>
"Take as many as you want," she said kindly. I could almost swear that she winked, or maybe it was my imagination. 
"You said your husband is in the house?" I asked as I grabbed two pies. <br/>
"Yes, he is," she responded, taking a seat on the couch opposite me. <br/>
For a long period, I ate slowly while taking sly glances at the woman, cleverly feasting my eyes on her supple flesh. 
After some minutes, I began to get irritated and worried that my friend was yet to answer me, so I asked the woman between mouthfuls, "What's taking your husband so long? Where is he sef?" <br/>
With a gentle and polite smile, the woman replied calmly, "Look inside the pie you're eating."  </p>
    </div>
          
         <p> 
      <NavLink to="/">
      <button className="home-btn">🔙</button>
      </NavLink>  
     </p> 
          </div>
    </div>
  )
}

function Path() {
  return (
    <div className='nav'>
      <Routes>
        
        <Route path="/" element={<Testerror/>}/>
        <Route path="/scareordare" element={<Scaredare/>}/>
        <Route path="/scareordareone" element={<Scaredareone/>}/>
        <Route path="/scareordaretwo" element={<Scaredaretwo/>}/>
        <Route path="/taleone" element={<Taleone/>}/>
        <Route path="/taletwo" element={<Taletwo/>}/>
        <Route path="/talethree" element={<Talethree/>}/>
        

      </Routes>
    </div>
  );
}
export default Path;