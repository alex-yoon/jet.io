import WelcomeContainer from "../../../app/javascript/react/containers/WelcomeContainer"
import LobbyContainer from "../../../app/javascript/react/containers/LobbyContainer"
import LobbyTile from "../../../app/javascript/react/components/LobbyTile"
import React from 'react'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import fetchMock from 'fetch-mock'

describe('WelcomeContainer', () => {
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
    fetchMock.get('/api/v1/lobbies', {
      status: 200,
      body: lobbies
    })
    wrapper = mount(<WelcomeContainer />)
  })

  it('renders a <LobbyContainer>', () => {
    expect(wrapper.find('LobbyContainer')).toBePresent()
  })
})
