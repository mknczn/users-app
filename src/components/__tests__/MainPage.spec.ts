import { describe, it, expect, assert, test } from "vitest"

import { mount } from "@vue/test-utils"
import MainPage from "../MainPage.vue"


describe("MainPage", () => {
  it("renders properly", () => {
    const wrapper = mount(MainPage, { props: { msg: "Lorem ipsum" } })
    expect(wrapper.text()).toContain("Lorem ipsum")
  })
})

test("JSON", () => {
    const input = {
      foo: "hello",
      bar: "world",
    };
  
    const output = JSON.stringify(input);
  
    expect(output).eq('{"foo":"hello","bar":"world"}');
    assert.deepEqual(JSON.parse(output), input, "matches original");
  });