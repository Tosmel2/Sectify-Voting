
import {
    PresidentialPollParent,
    CenterWrapper,
    DataHeader,
    DataHeadersContainer,
    Header,
    Rows,
    PollHeadersContainer,
    Wrapper, 
    SearchBarContainer,
    SearchBarForm,
    Button,
    SearchWrapper,
    VButton
  } from "./presidential.poll.styles.js";
  import React, { useState } from 'react';
  import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
  import searchIcon from "../../assets/search-icon.png";
  import filter from "../../assets/filter.png";
  import apc from "../../assets/apc.png";
  import aa from "../../assets/aa.png";
  import aac from "../../assets/aac.png";
  import apga from "../../assets/apga.png";
  import accord from "../../assets/accord.png";
  import lp from "../../assets/lp.png";
  import pdp from "../../assets/pdp.png";
  import zlp from "../../assets/zlp.png";
  
  
  
  
  
  
  const PresidentialPoll = () => {
    const [votedCandidate, setVotedCandidate] = useState('');

  const handleVote = (candidate) => {
    if (!votedCandidate) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        fontWeight: 'bold',
        title: 'Successful',
        text: 'You have successfully casted your vote to your preferred candidate',
        confirmButtonColor: 'green',
        confirmButtonText: 'Continue',
        // showConfirmButton: false,
        timer: 2500
      });

      setVotedCandidate(candidate);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'danger',
        title: 'You have already voted!',
        text: 'You can only vote for one candidate in this divison.',
        confirmButtonColor: 'red',
        confirmButtonText: 'OK',
        timer: 2000
      });
    }
  };
  
  
    return (
      <PresidentialPollParent>
        <CenterWrapper>
          <h3>2023 Presidential Election</h3>
          <PollHeadersContainer>
         
            <Header>
              <SearchWrapper>
              <SearchBarContainer>
              <SearchBarForm>
                <button>
                  <img src={searchIcon} alt="search-icon" />
                </button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="search poll category, Aspirant..."
                />
              </SearchBarForm>
            </SearchBarContainer>
            <Button><img src={filter} alt="filter" marginRight= {15}/>Filter</Button>
            </SearchWrapper>
            </Header>
  
          </PollHeadersContainer>
  
          <DataHeadersContainer>
  
            <DataHeader>Aspirant</DataHeader>
            <DataHeader>Political Party</DataHeader>
            <DataHeader>Party Logo</DataHeader>
            <DataHeader>Action</DataHeader>
            
          </DataHeadersContainer>
  
          
            <Wrapper>
  
              <Rows >
                <table>
                  
                  <tr>
                    <td>Bola Tinubu</td>
                    <td>All Progressive Congress(APC)</td>
                    <td><img src={apc} alt="apc"/></td>
                    <td>
                    <VButton 
                      onClick={() => handleVote('Bola Tinubu')}
                      className={votedCandidate === 'Bola Tinubu' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >
                        Vote
                    </VButton></td>
                    
                  </tr>
                  <tr>
                    <td>Professor Peter Umeadi</td>
                    <td>Accord Party (AP)</td>
                    <td><img src={accord} alt="accord"/></td>
                    <td><VButton 
                      onClick={() => handleVote('Professor Peter Umeadi')}
                      className={votedCandidate === 'Professor Peter Umeadi' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >Vote</VButton>
                    </td>
                    </tr>
                  <tr>
                  <td>Sowore Omoyele</td>
                    <td>Peoples Democratic Party (PDP)</td>
                    <td><img src={pdp} alt="pdp"/></td>
                    <td><VButton 
                      onClick={() => handleVote('Sowore Omoyele')}
                      className={votedCandidate === 'Sowore Omoyele' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >Vote</VButton></td>
                    
                  </tr>
                  <tr>
                  <td>Peter Obi</td>
                    <td>Labour Party (LP) </td>
                    <td><img src={lp} alt="lp"/></td>
                    <td><VButton 
                      onClick={() => handleVote('Peter Obi')}
                      className={votedCandidate === 'Peter Obi' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >Vote</VButton></td>
                    </tr>
                  <tr>
                  <td>Rabiu Musa Kwankwaso</td>
                    <td>All Progressives Grand Alliance (APGA)</td>
                    <td><img src={apga} alt="apga"/></td>
                    <td><VButton 
                      onClick={() => handleVote('Rabiu Musa Kwankwaso')}
                      className={votedCandidate === 'Rabiu Musa Kwankwaso' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >Vote</VButton></td>
                    </tr>
                  <tr>
                  <td>Nwanyanwu Daniel</td>
                    <td>African Action Congress (AAC)</td>
                    <td><img src={aac} alt="aac"/></td>
                    <td><VButton 
                      onClick={() => handleVote('Nwanyanwu Daniel')}
                      className={votedCandidate === 'Nwanyanwu Daniel' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >Vote</VButton></td>
                    </tr>
                  <tr>
                  <td>Imumolen Christopher</td>
                    <td>Action Alliance (AA)</td>
                    <td><img src={aa} alt="aa"/></td>
                    <td><VButton 
                      onClick={() => handleVote('Imumolen Christopher')}
                      className={votedCandidate === 'Imumolen Christopher' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >Vote</VButton></td>
                    
                  </tr>
                  <tr>
                  <td>Dumebi Kachikwu</td>
                    <td>Zenith Labour Party (ZLP)</td>
                    <td><img src={zlp} alt="zlp"/></td>
                    <td><VButton 
                      onClick={() => handleVote('Dumebi Kachikwu')}
                      className={votedCandidate === 'Dumebi Kachikwu' ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500'}
                      >Vote</VButton></td>
                    
                  </tr>
  
                </table>
              </Rows>
  
            </Wrapper>
          
        </CenterWrapper>
      </PresidentialPollParent>
    );
  };
  
  export default PresidentialPoll;