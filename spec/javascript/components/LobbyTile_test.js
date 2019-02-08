import LobbyTile from "../../../app/javascript/react/components/LobbyTile"
import LinkButton from "../../../app/javascript/react/components/LinkButton"
import React from 'react'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'

describe('LobbyTile', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme()

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
    expect(wrapper).toIncludeText('4')
  })

  describe("renders a <LinkButton>", () => {
    it("<LinkButton> exists", () => {
      expect(wrapper.find('LinkButton')).toBePresent()
    })

    it("links to the game instance with matching id", () => {
      expect(wrapper.find('LinkButton').prop('to')).toBe('/game/1')
    })
  })
})
