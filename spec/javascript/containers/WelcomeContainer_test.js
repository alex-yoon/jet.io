import WelcomeContainer from "../../../app/javascript/react/containers/WelcomeContainer"
import LobbyTile from "../../../app/javascript/react/components/LobbyTile"
import React from 'react'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import fetchMock from 'fetch-mock'

describe('WelcomeContainer', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme()
    wrapper = mount(<WelcomeContainer />)
  })

  it('renders a <LobbyContainer>', () => {
    expect(wrapper.find('LobbyContainer')).toBePresent()
  })
})
