# Social-Media-App
Finding Socail Media Profiles from Facebook Profile Url


I could think of three methods while solving this problem.
1. Data Science Method
  Cons : Method would require a large set of data where input in form of facebook url and other from different websites will be provided.
         but no such data file is available.
         
2. we could hit Facebook APIs from url given and retrieve some set of datas(like Location, Keywords, Name, Email etc.) from that which would help us extract data from other APIs from Instagram, Twitter.
   As APIs dont allow many set of datas to be extracted(May be due to Cambridge Analytics Fiasco) except PageId and Name. Also from PageId we are not allowed to extract basic details (Page Content Access Specifier issue).
   
   
3. Facebook Pages/Profile has a  section in About where most of urls for other social profiles are mentioned. Extract that as part of HttpResponse and extract other social media profiles from that.
