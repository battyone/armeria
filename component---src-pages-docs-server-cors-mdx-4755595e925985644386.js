(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},BLYt:function(e,t,r){"use strict";r.r(t),r.d(t,"pageTitle",(function(){return o})),r.d(t,"_frontmatter",(function(){return s})),r.d(t,"default",(function(){return d}));r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("E5k/"),r("q1tI");var a=r("7ljp"),n=r("xCMr");var i,o="Configuring CORS",s={},c=(i="Tip",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),l={pageTitle:o,_frontmatter:s},p=n.a;function d(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(p,Object.assign({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"configuring-cors",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h1"},{href:"#configuring-cors","aria-label":"configuring cors permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Configuring CORS"),Object(a.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#allowing-any-origin"}),"Allowing any origin")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#allowing-specific-origins"}),"Allowing specific origins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#applying-different-policies-for-different-origins"}),"Applying different policies for different origins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#applying-a-policy-to-the-specific-paths"}),"Applying a policy to the specific paths")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#configuring-cors-via-annotation"}),"Configuring CORS via annotation"))),Object(a.b)("p",null,"Armeria provides a way to configure Cross-origin resource sharing (CORS) policy for specific origins or\nany origin via ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://CorsServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsServiceBuilder.html"}),"type://CorsServiceBuilder"),". For more information about CORS,\nvisit ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"Wikipedia's CORS page"),"."),Object(a.b)("h2",{id:"allowing-any-origin",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#allowing-any-origin","aria-label":"allowing any origin permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Allowing any origin"),Object(a.b)("p",null,"To configure CORS Service allowing any origin (*), use ",Object(a.b)("inlineCode",{parentName:"p"},"CorsService.builderForAnyOrigin()"),", e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.HttpMethod;\nimport com.linecorp.armeria.server.HttpService;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.cors.CorsService;\n\nHttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builderForAnyOrigin()\n                   .allowCredentials()\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(a.b)("h2",{id:"allowing-specific-origins",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#allowing-specific-origins","aria-label":"allowing specific origins permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Allowing specific origins"),Object(a.b)("p",null,"To configure CORS Service allowing specific origins, use ",Object(a.b)("inlineCode",{parentName:"p"},"CorsService.builder()"),", e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'HttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   .allowCredentials()\n                   .allowNullOrigin() // \'Origin: null\' will be accepted.\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(a.b)("h2",{id:"applying-different-policies-for-different-origins",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#applying-different-policies-for-different-origins","aria-label":"applying different policies for different origins permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Applying different policies for different origins"),Object(a.b)("p",null,"To configure different policies for different groups of origins, use ",Object(a.b)("inlineCode",{parentName:"p"},"andForOrigins()")," or ",Object(a.b)("inlineCode",{parentName:"p"},"andForOrigin()"),"\nmethod which creates a new ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ChainedCorsPolicyBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/ChainedCorsPolicyBuilder.html"}),"type://ChainedCorsPolicyBuilder")," with the specific origins.\nCall ",Object(a.b)("inlineCode",{parentName:"p"},"and()")," to return to ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://CorsServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsServiceBuilder.html"}),"type://CorsServiceBuilder")," once you are done with building a policy, e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'HttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   .allowCredentials()\n                   .allowNullOrigin() // \'Origin: null\' will be accepted.\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .maxAge(3600)\n                   .andForOrigins("http://example2.com")\n                   .allowCredentials()\n                   .allowRequestMethods(HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header2")\n                   .exposeHeaders("expose_header_3", "expose_header_4")\n                   .and()\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(a.b)("p",null,"You can also directly add a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://CorsPolicy:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsPolicy.html"}),"type://CorsPolicy")," created by a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://CorsPolicyBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsPolicyBuilder.html"}),"type://CorsPolicyBuilder"),", e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.server.cors.CorsPolicyBuilder;\n\nHttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   .allowCredentials()\n                   .allowNullOrigin() // \'Origin: null\' will be accepted.\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .allowRequestHeaders("allow_request_header")\n                   .exposeHeaders("expose_header_1", "expose_header_2")\n                   .preflightResponseHeader("x-preflight-cors", "Hello CORS")\n                   .maxAge(3600)\n                   .addPolicy(CorsPolicy.builder("http://example2.com")\n                                        .allowCredentials()\n                                        .allowRequestMethods(HttpMethod.GET)\n                                        .allowRequestHeaders("allow_request_header2")\n                                        .exposeHeaders("expose_header_3", "expose_header_4")\n                                        .build())\n                   .newDecorator();\n\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(a.b)("h2",{id:"applying-a-policy-to-the-specific-paths",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#applying-a-policy-to-the-specific-paths","aria-label":"applying a policy to the specific paths permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Applying a policy to the specific paths"),Object(a.b)("p",null,"To configure a policy to the specific paths, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"route()")," methods in the\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://CorsServiceBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/CorsServiceBuilder.html"}),"type://CorsServiceBuilder")," and ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ChainedCorsPolicyBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/cors/ChainedCorsPolicyBuilder.html"}),"type://ChainedCorsPolicyBuilder"),". They can help you to adjust the scope that\na policy is applied to, e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'HttpService myService = (ctx, req) -> ...;\nFunction<? super HttpService, CorsService> corsService =\n        CorsService.builder("http://example.com")\n                   // CORS policy will be applied for the path that starts with \'/message/web/api/\'.\n                   .route("prefix:/message/web/api/")\n                   .allowRequestMethods(HttpMethod.POST, HttpMethod.GET)\n                   .newDecorator();\nServerBuilder sb = Server.builder()\n                         .service("/message", myService.decorate(corsService));\n')),Object(a.b)(c,{mdxType:"Tip"},Object(a.b)("p",null,"Please refer to the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://Route:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html"}),"type://Route")," in order to learn how to specify a path pattern.")),Object(a.b)("h2",{id:"configuring-cors-via-annotation",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#configuring-cors-via-annotation","aria-label":"configuring cors via annotation permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Configuring CORS via annotation"),Object(a.b)("p",null,"You can also configure CORS for ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/armeria/docs/server-annotated-service"}),"Annotated services")," using the\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://@CorsDecorator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/decorator/CorsDecorator.html"}),"type://@CorsDecorator")," annotation, e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.server.annotation.AdditionalHeader;\nimport com.linecorp.armeria.server.annotation.Get;\nimport com.linecorp.armeria.server.annotation.decorator.CorsDecorator;\n\nObject annotatedService = new Object() {\n    @Get("/get")\n    @CorsDecorator(origins = "http://example.com", credentialsAllowed = true,\n                   nullOriginAllowed = true, exposedHeaders = "expose_header",\n                   allowedRequestMethods = HttpMethod.GET, allowedRequestHeaders = "allow_header",\n                   preflightResponseHeaders = {\n                       @AdditionalHeader(name = "preflight_header", value = "preflight_value")\n                   })\n    // In case you want to configure different CORS policies for different origins.\n    @CorsDecorator(origins = "http://example2.com", credentialsAllowed = true)\n    public HttpResponse get() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n\n    @Post("/post")\n    // In case you want to allow any origin (*):\n    @CorsDecorator(origins = "*", exposedHeaders = "expose_header")\n    // You can not add a policy after adding the decorator allowing any origin (*).\n    public HttpResponse post() {\n        return HttpResponse.of(HttpStatus.OK)\n    }\n};\n\nServer s = Server.builder()\n                 .annotatedService("/example", annotatedService)\n                 .build();\n')),Object(a.b)("p",null,"You can also use ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://@CorsDecorator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/decorator/CorsDecorator.html"}),"type://@CorsDecorator")," at the class level to apply the decorator to all service methods in the class.\nNote that the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://@CorsDecorator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/decorator/CorsDecorator.html"}),"type://@CorsDecorator")," annotation specified at the method level takes precedence over what's specified\nat the class level:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// This decorator will be ignored for the path "/post".\n@CorsDecorator(origins = "http://example.com", credentialsAllowed = true)\nclass MyAnnotatedService {\n    @Get("/get")\n    public HttpResponse get() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n\n    @Post("/post")\n    @CorsDecorator(origins = "http://example2.com", credentialsAllowed = true)\n    public HttpResponse post() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n}\n')),Object(a.b)("p",null,"If you want to allow a CORS policy to the specific paths, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"pathPatterns")," property:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// This policy will be applied only to the paths matched by the pattern.\n@CorsDecorator(origins = "http://example.com", pathPatterns = "glob:/**/web/api", credentialsAllowed = true)\nclass MyAnnotatedService {\n    ...\n}\n')))}d.isMDXComponent=!0},LhBn:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"nodes":[{"tableOfContents":{"items":[{"url":"#requestcontext-custom-attributes","title":"RequestContext custom attributes"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-custom-attributes"}},{"tableOfContents":{"items":[{"url":"#production-checklist","title":"Production checklist"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-production-checklist"}},{"tableOfContents":{"items":[{"url":"#logging-contextual-information","title":"Logging contextual information"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-logging"}},{"tableOfContents":{"items":[{"url":"#structured-logging","title":"Structured logging"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-dropwizard","title":"Using Armeria with Dropwizard"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-dropwizard-integration"}},{"tableOfContents":{"items":[{"url":"#saml-single-sign-on","title":"SAML Single Sign-On"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-saml"}},{"tableOfContents":{"items":[{"url":"#unit-testing-client-and-service","title":"Unit-testing Client and Service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-unit-testing"}},{"tableOfContents":{"items":[{"url":"#structured-logging-with-kafka","title":"Structured logging with Kafka"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging-kafka"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-spring-webflux","title":"Using Armeria with Spring WebFlux"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-spring-webflux-integration"}},{"tableOfContents":{"items":[{"url":"#zipkin-integration","title":"Zipkin integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zipkin"}},{"tableOfContents":{"items":[{"url":"#service-discovery-with-zookeeper","title":"Service discovery with ZooKeeper"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zookeeper"}},{"tableOfContents":{"items":[{"url":"#circuit-breaker","title":"Circuit breaker"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-circuit-breaker"}},{"tableOfContents":{"items":[{"url":"#sending-custom-http-headers","title":"Sending custom HTTP headers"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-custom-http-headers"}},{"tableOfContents":{"items":[{"url":"#decorating-a-client","title":"Decorating a client"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-decorator"}},{"tableOfContents":{"items":[{"url":"#calling-an-http-service","title":"Calling an HTTP service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-http"}},{"tableOfContents":{"items":[{"url":"#calling-a-grpc-service","title":"Calling a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-grpc"}},{"tableOfContents":{"items":[{"url":"#retrofit-integration","title":"Retrofit integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retrofit"}},{"tableOfContents":{"items":[{"url":"#calling-a-thrift-service","title":"Calling a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-thrift"}},{"tableOfContents":{"items":[{"url":"#automatic-retry","title":"Automatic retry"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retry"}},{"tableOfContents":{"items":[{"url":"#client-side-load-balancing-and-service-discovery","title":"Client-side load balancing and service discovery"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-service-discovery"}},{"tableOfContents":{"items":[{"url":"#overriding-client-timeouts","title":"Overriding client timeouts"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-timeouts"}},{"tableOfContents":{"items":[{"url":"#user-manual","title":"User manual"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"index"}},{"tableOfContents":{"items":[{"url":"#writing-an-access-log","title":"Writing an access log"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-access-log"}},{"tableOfContents":{"items":[{"url":"#server-basics","title":"Server basics"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-basics"}},{"tableOfContents":{"items":[{"url":"#decorating-a-service","title":"Decorating a service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-decorator"}},{"tableOfContents":{"items":[{"url":"#configuring-cors","title":"Configuring CORS"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-cors"}},{"tableOfContents":{"items":[{"url":"#browsing-and-invoking-services-with-docservice","title":"Browsing and invoking services with DocService"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-docservice"}},{"tableOfContents":{"items":[{"url":"#running-a-grpc-service","title":"Running a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-grpc"}},{"tableOfContents":{"items":[{"url":"#embedding-a-servlet-container","title":"Embedding a servlet container"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-servlet"}},{"tableOfContents":{"items":[{"url":"#serving-server-sent-events","title":"Serving Server-Sent Events"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-sse"}},{"tableOfContents":{"items":[{"url":"#annotated-services","title":"Annotated services"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-annotated-service"}},{"tableOfContents":{"items":[{"url":"#serving-static-files","title":"Serving static files"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-http-file"}},{"tableOfContents":{"items":[{"url":"#running-a-thrift-service","title":"Running a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-thrift"}},{"tableOfContents":{"items":[{"url":"#setting-up-a-project","title":"Setting up a project"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"setup"}}]}}}')},xCMr:function(e,t,r){"use strict";r("E5k/");var a=r("LhBn"),n=r("q1tI"),i=r.n(n),o=r("/94A"),s=r("+ejy");t.a=function(e){var t=a.data.allMdx.nodes;return i.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-cors-mdx-4755595e925985644386.js.map