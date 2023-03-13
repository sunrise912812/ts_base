import React from "react"

const a : JSX.Element = <div tabIndex={0}>
    <span>A</span>
</div>

const b : JSX.Element = React.createElement('div',{tabIndex : 0}, 'a')

const d : string = 'abc'

const c = d as string