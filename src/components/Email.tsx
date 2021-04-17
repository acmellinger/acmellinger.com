import styled from "styled-components";

const EmailLink = styled.a`
  text-decoration: underline;
  margin: 0;
  color: #fff;
`;

const ErrorMessage = styled.p`
  display: inline;
  margin: 0;
  color: #fff;
`;

type EmailProps = {
  email: string | undefined;
  error: Boolean;
};

const Email = ({ email, error }: EmailProps) => {
  return (
    <div id="header-links" className="header-links">
      {"\u00A0"}
      {!error ? (
        email && (
          <EmailLink href={"mailto:" + email + "?subject=Website Contact"}>
            {email}
          </EmailLink>
        )
      ) : (
        <ErrorMessage>CAPTCHA Failed</ErrorMessage>
      )}
    </div>
  );
};

export default Email;
