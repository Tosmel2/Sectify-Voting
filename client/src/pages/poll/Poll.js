
import {
  PollParent,
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
  SearchWrapper
} from "./poll.styles";
import searchIcon from "../../assets/search-icon.png";
import filter from "../../assets/filter.png";






const Poll = () => {


  return (
    <PollParent>
      <CenterWrapper>
        <h3>All poll</h3>
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

          <DataHeader>Category</DataHeader>
          <DataHeader>Registered voters</DataHeader>
          <DataHeader>Total vote</DataHeader>
          <DataHeader>Start Date</DataHeader>
          <DataHeader>End Date</DataHeader>
          <DataHeader>Status</DataHeader>
        </DataHeadersContainer>

        
          <Wrapper>

            <Rows >
              <table>
                
                <tr>
                  <td>Presidential</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>In progress</td>
                </tr>
                <tr>
                  <td>Gubernatorial</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>Completed</td>
                </tr>
                <tr>
                <td>House of Rep</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>Completed</td>
                </tr>
                <tr>
                <td>Senatorial</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>Completed</td>
                </tr>
                <tr>
                <td>House of Assembly</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>Completed</td>
                </tr>
                <tr>
                <td>Local Government</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>Completed</td>
                </tr>
                <tr>
                <td>Local Government</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>Completed</td>
                </tr>
                <tr>
                <td>Local Government</td>
                  <td>13,456,345</td>
                  <td>12,1123,123</td>
                  <td>11th of June</td>
                  <td>13th of June</td>
                  <td>Completed</td>
                </tr>

              </table>
            </Rows>

          </Wrapper>
        
      </CenterWrapper>
    </PollParent>
  );
};

export default Poll;