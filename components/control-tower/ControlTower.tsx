"use client";

import { Component as ReactComponent } from "react";
import Logic from "./logic";
import { Shell } from "./views/Shell";
import type { Vals } from "./dc";

type Props = {
  /** "Show reasoning" design tweak: whether an action's rationale starts expanded. */
  showReasoning?: boolean;
};

/**
 * Hosts the design's logic class (state + behaviour) and renders the generated views
 * against the values it returns from renderVals().
 */
export default class ControlTower extends ReactComponent<Props, { version: number }> {
  state = { version: 0 };
  logic: Vals;

  constructor(props: Props) {
    super(props);
    this.logic = new Logic(props);
    this.logic.__host = this;
  }

  __setLogicState(update: unknown, cb?: () => void) {
    const prev = this.logic.state;
    const patch = typeof update === "function" ? update(prev) : update;
    this.logic.state = { ...prev, ...(patch as object) };
    this.setState((s) => ({ version: s.version + 1 }), cb);
  }

  componentDidMount() {
    this.logic.componentDidMount();
  }

  componentDidUpdate(prevProps: Props) {
    this.logic.props = this.props;
    this.logic.componentDidUpdate(prevProps);
  }

  componentWillUnmount() {
    this.logic.componentWillUnmount();
  }

  render() {
    const v = { ...this.props, ...this.logic.renderVals() };
    return <Shell v={v} />;
  }
}
