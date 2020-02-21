import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  //Primary
  .add("Primary", () => <Button type="primary" label="Do something" />)
  .add("Primary-2", () => <Button type="primary2" label="Do something" />)
  .add("Primary-3", () => <Button type="primary3" label="Do something" />)
  .add("Primary-4", () => <Button type="primary4" label="Do something" />)
  .add("Primary-5", () => <Button type="primary5" label="Do something" />)
  .add("Primary-6", () => <Button type="primary6" label="Do something" />)

  //Danger
  .add("Danger", () => <Button type="danger" label="Do something" />)
  .add("Danger-2", () => <Button type="danger2" label="Do something" />)
  .add("Danger-3", () => <Button type="danger3" label="Do something" />)
  .add("Danger-4", () => <Button type="danger4" label="Do something" />)
  .add("Danger-5", () => <Button type="danger5" label="Do something" />)
  .add("Danger-6", () => <Button type="danger6" label="Do something" />)

  //Success
  .add("Success", () => <Button type="success" label="Do something" />)
  .add("Success-2", () => <Button type="success2" label="Do something" />)
  .add("Success-3", () => <Button type="success3" label="Do something" />)
  .add("Success-4", () => <Button type="success4" label="Do something" />)
  .add("Success-5", () => <Button type="success5" label="Do something" />)
  .add("Success-6", () => <Button type="success6" label="Do something" />)

  //Warning
  .add("Warning", () => <Button type="warning" label="Do something" />)
  .add("Warning-2", () => <Button type="warning2" label="Do something" />)
  .add("Warning-3", () => <Button type="warning3" label="Do something" />)
  .add("Warning-4", () => <Button type="warning4" label="Do something" />)
  .add("Warning-5", () => <Button type="warning5" label="Do something" />)
  .add("Warning-6", () => <Button type="warning6" label="Do something" />)

  //Default
  .add("Default", () => <Button type="default" label="Do something" />)
  .add("Default-2", () => <Button type="default2" label="Do something" />)
  .add("Default-3", () => <Button type="default3" label="Do something" />)
  .add("Default-4", () => <Button type="default4" label="Do something" />)
  .add("Default-5", () => <Button type="default5" label="Do something" />)
  .add("Default-6", () => <Button type="default6" label="Do something" />)

  //image set
  .add("AddCart", () => <Button type="addcart" label="" />)
  .add("Favorites", () => <Button type="favorites" label="" />)
  .add("Like", () => <Button type="like" label="" />)
  .add("Cart", () => <Button type="cart" label="" />);
