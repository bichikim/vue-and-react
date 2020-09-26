import Document, {Head, Html, Main, NextScript, DocumentProps} from 'next/document'
import {createElement as h} from 'react'

export interface Props extends DocumentProps {
  pageProps: any
  styleTags: any
}


class CustomDocument extends Document<Props> {
  render() {
    return (
      h(Html, {lang: 'en'},
        h(Head, {}),
        h('body', null,
          h(Main),
          h(NextScript),
        ),
      )
    )
  }
}

export default CustomDocument
