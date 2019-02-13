import LinkButton from "../../../app/javascript/react/components/LinkButton.js"
import React from 'react'
import { mount } from 'enzyme'
import { Link } from 'react-router'

describe('LinkButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <LinkButton
        to="/"
        classes=""
        text="Home page"
      />
    )
  })

  describe("renders a <Link>", () => {
    it("Renders the 'text' prop", () => {
      expect(wrapper.find('Link').find('p').props().children).toBe('Home page')
    })

    it("Leads to the destination specified in the 'to' prop", () => {
      expect(wrapper.find('Link').prop('to')).toBe('/')
    })
  })
})
