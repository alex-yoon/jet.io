import LobbyIndexContainer from "../../../app/javascript/react/containers/LobbyIndexContainer"
import LobbyTile from "../../../app/javascript/react/components/LobbyTile"
import React from 'react'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import fetchMock from 'fetch-mock'

describe('LobbyIndexContainer', () => {
  let wrapper
  let lobbies = [
      { id: 1, name: 'Mobius', population: 3 },
      { id: 2, name: 'Blaze', population: 3 },
      { id: 3, name: 'Cipher', population: 2 },
      { id: 4, name: 'Trigger', population: 7 }
    ]

  beforeEach(() => {
    fetchMock.get('/api/v1/lobbies', {
      status: 200,
      body: lobbies
    })
    wrapper = mount(<LobbyIndexContainer />)
  })

  afterEach(fetchMock.restore)

  describe("renders <LobbyTile>s after fetch", () => {
    it('<LobbyTile>s exist', (done) => {
      setTimeout(() => {
        expect(wrapper.find('LobbyTile')).toBePresent()
        done()
      }, 0)
    })

    it("<LobbyTile>s have correct props", (done) => {
      setTimeout(() => {
        lobbies.forEach((lobbyJson) => {
          expect(wrapper).toContainReact(
            <LobbyTile
              lobbyId={lobbyJson.id}
              name={lobbyJson.name}
              population={lobbyJson.population}
            />
          )
        })
        done()
      }, 0)
    })
  })
})
