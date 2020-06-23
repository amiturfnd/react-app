import React from 'react';
import '../styles/app-footer.scss';

function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer__rights">
        Copyright © 2016-2020, Ocelot Uproar Ltd. All rights reserved.
      </div>
      <div className="app-footer__links">
        <a href="/docs">Documentation</a> | <a href="/blog">Blog</a> | <a href="/press-kit">Press Kit</a> | <a href="/careers">Careers</a> | <a href="/legal">Legal</a> | <a href="mailto:support@katacoda.com">Support@katacoda.com</a>
      </div>
    </footer>
  );
}

export default AppFooter;