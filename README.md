# Social-Media-App
Finding Social Media Profiles from Facebook Profile Url


I could think of three methods while solving this problem.
1. Data Science Method
  Method would require a large set of data where input in form of facebook url and other from different websites will be provided.
         but no such data file is available.
         
2. we could hit Facebook APIs from url given and retrieve some set of datas(like Location, Keywords, Name, Email etc.) from that which      would help us extract data from other APIs from Instagram, Twitter.
   As APIs dont allow many set of datas to be extracted(May be due to Cambridge Analytics Fiasco) except PageId and Name. Also from PageId we are not allowed to extract basic details (Page Content Access Specifier issue).
   
   However, If we can get the user to login then we can get its personal detaisl and finding other social media profiles get easy/

3. We can use general service like Google/yahoo/outlook/hotmail using OAuth(Login Using Google, Getting client Id)for finding the email address using which we can find their url for different Social Media Profiles.
   
4. Facebook Pages/Profile has a  section in About where most of urls for other social profiles are mentioned. Extract that as part of HttpResponse and extract other social media profiles from that.
