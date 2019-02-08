import LobbyContainer from "../../../app/javascript/react/containers/LobbyContainer"
import LobbyTile from "../../../app/javascript/react/components/LobbyTile"
import React from 'react'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import fetchMock from 'fetch-mock'

describe('LobbyContainer', () => {
  let wrapper
  let lobbies = {
    lobbies: [
      { id: 1, name: 'Mobius', population: 3 },
      { id: 2, name: 'Blaze', population: 3 },
      { id: 3, name: 'Cipher', population: 2 },
      { id: 4, name: 'Trigger', population: 7 }
    ]
  }

  beforeEach(() => {
    jasmineEnzyme()
    fetchMock.get('/api/v1/lobbies.json', {
      status: 200,
      body: lobbies
    })
    wrapper = mount(<LobbyContainer />)
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
        let lobbiesWrapper = wrapper.find('LobbyTile')

        lobbies['lobbies'].forEach((lobbyJson) => {
          expect(lobbiesWrapper).toContainReact(
            <LobbyTile
              lobbyId={lobbyJson.id}
              name={lobbyJson.name}
              population={lobbyJson.population}
            />
          )
        })
      }, 0)
    })
  })
})
