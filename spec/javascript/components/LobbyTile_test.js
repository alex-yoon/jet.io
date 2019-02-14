import LobbyTile from "../../../app/javascript/react/components/LobbyTile"
import LinkButton from "../../../app/javascript/react/components/LinkButton"
import React from 'react'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'

describe('LobbyTile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <LobbyTile
        lobbyId="1"
        name="Mobius"
        population="4"
      />
    )
  })

  it("renders lobby name", () => {
    expect(wrapper).toIncludeText('Mobius')
  })

  it("renders lobby population", () => {
    expect(wrapper).toIncludeText('4 player(s)')
  })
})
