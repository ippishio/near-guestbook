import React from 'react';

export default function SignIn() {
  return (
    <>
      <h2>
          This is a redesign of NEAR guest-book, with the implementation of changing wallets 
          and soft design🧸. 
      </h2> 
      <h4>   Original guest-book is used to demonstrate a key element of NEAR’s UX: once an app has
          permission to make calls on behalf of a user (that is, once a user
          signs in), the app can make calls to the blockchain for them without
          prompting extra confirmation. So you’ll see that if you don’t
          include a donation, your message gets posted right to the guest book.
          </h4>

      <h4>
          But if you do add a donation, then NEAR will double-check that
          you’re ok with sending money to this app.
      </h4>
      <h4>
          Go ahead and sign in to try it out! 💬💬💬
      </h4>
    </>
  );
}
