using Abp.Modules;
using Abp.Reflection.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace Acme.HeroShop.Web.Public
{
    public class ShopPublicModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public ShopPublicModule(IHostingEnvironment env)
        {
            _env = env;
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(ShopPublicModule).GetAssembly());
        }
    }
}
