using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace Mazal_Tov.App_Start
{
    public class MyAuthProvider : OAuthAuthorizationServerProvider
    {

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);

 
            var userdata = BL.UserBL.Login(context.UserName, context.Password);
            if (userdata != null)
            {
                identity.AddClaim(new Claim(ClaimTypes.Role, string.Join(",", userdata.Roles.Select(p => p.Name))));
                identity.AddClaim(new Claim(ClaimTypes.Name, userdata.Username));
                //roles example
                var rolesTechnicalNamesUser = new List<string>();

                if (userdata.Roles != null)
                {
                    rolesTechnicalNamesUser = userdata.Roles.Select(x => x.Name).ToList();

                    foreach (var role in userdata.Roles)
                        identity.AddClaim(new Claim(ClaimTypes.Role, role.Name));
                }

                var principal = new GenericPrincipal(identity, rolesTechnicalNamesUser.ToArray());
                
                Thread.CurrentPrincipal = principal;
                
                identity.AddClaim(new Claim(ClaimTypes.GivenName, userdata.Tz));
                //identity.AddClaim(new Claim(ClaimTypes.Email, userdata.em));
                context.Validated(identity);
            }
            else
            {
                context.SetError("invalid_grant", "Provided username and password is incorrect");
                context.Rejected();
            }
        }

    }
}