function performScan() {
        const url = document.getElementById("urlInput").value;
        const scanType = document.getElementById("scanType").value;

        if (url.trim() === "") {
          alert("Please enter a valid URL.");
          return;
        }

        let searchQuery = "";
        let searchUrl = "";

        switch (scanType) {
          // General
          case "directory_listing":
            searchQuery = `site:${url} intitle:index.of`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "config_files":
            searchQuery = `site:${url} ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "database_files":
            searchQuery = `site:${url} ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "wordpress":
            searchQuery = `site:${url} inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "wordpress_two":
            searchQuery = `site:${url} inurl:wp-content | inurl:wp-includes`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "log_files":
            searchQuery = `site:${url} ext:log`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "backup_old_files":
            searchQuery = `site:${url} ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "backup_old_files":
            searchQuery = `site:${url} ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "apache_config_files":
            searchQuery = `site:${url} filetype:config "apache"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "install_setup_files":
            searchQuery = `site:${url} inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "apache_struts_rce":
            searchQuery = `site:${url} ext:action | ext:struts | ext:do`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "sql_error":
            searchQuery = `site:${url} intext:"sql syntax near" | intext:"syntax error has occurred" | intext:"incorrect syntax near" | intext:"unexpected end of SQL command" | intext:"Warning: mysql_connect()" | intext:"Warning: mysql_query()" | intext:"Warning: pg_connect()"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "docs_exposure":
            searchQuery = `site:${url} ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "third_party_exposure":
            searchQuery = `site:http://ideone.com | site:http://codebeautify.org | site:http://codeshare.io | site:http://codepen.io | site:http://repl.it | site:http://justpaste.it | site:http://pastebin.com | site:http://jsfiddle.net | site:http://trello.com | site:*.atlassian.net | site:bitbucket.org "${url}"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "git_exposure":
            searchQuery = `inurl:"/.git" ${url} -github`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          // Specific
          case "phpinfo":
            searchQuery = `site:${url} ext:php intitle:phpinfo 'published by the PHP Group'`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "htaccess_phpinfo":
            searchQuery = `site:${url} inurl:"/phpinfo.php" | inurl:".htaccess"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "backdoor":
            searchQuery = `site:${url} inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "open_redirect":
            searchQuery = `site:${url} inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "subdomain_crt":
            searchQuery = `${url}`;
            searchUrl = `https://crt.sh/?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "subdomain_one":
            searchQuery = `site:*.${url} -site:www.kiwi.com`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "subdomain_two":
            searchQuery = `site:*.*.${url}`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "bitbucket_atlassian":
            searchQuery = `site:atlassian.net | site:bitbucket.org "${url}"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "stackoverflow":
            searchQuery = `site:stackoverflow.com "${url}"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "wayback_urls":
            searchQuery = `${url}`;
            searchUrl = `https://web.archive.org/cdx/search/cdx?url=*.${encodeURIComponent(searchQuery)}/*&output=text&fl=original&collapse=urlkey`;
            break;
          case "shodan_search":
            searchQuery = `${url}`;
            searchUrl = `https://www.shodan.io/search?query=${encodeURIComponent(searchQuery)}`;
            break;
          case "github_search":
            searchQuery = `${url}`;
            searchUrl = `https://github.com/search?q=%22*.${encodeURIComponent(searchQuery)}%22&type=repositories`;
            break;
          case "gitlab_github_search":
            searchQuery = `site:github.com | site:gitlab.com "${url}"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "pastebin_search":
            searchQuery = `site:pastebin.com "${url}"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "open_bug_bounty":
            searchQuery = `${url}`;
            searchUrl = `https://www.openbugbounty.org/search/?search=${encodeURIComponent(searchQuery)}`;
            break;
          case "swf_google":
            searchQuery = `inurl:${url} ext:swf`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "php_wayback":
            searchQuery = `${url}`;
            searchUrl = `https://web.archive.org/cdx/search?url=${encodeURIComponent(searchQuery)}/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*php&limit=100000`;
            break;
          case "s_buckets":
            searchQuery = `site:.s3.amazonaws.com "${url}"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "api_wsdl":
            searchQuery = `site:${url} filetype:wsdl | filetype:WSDL | ext:svc | inurl:wsdl | Filetype: ?wsdl | inurl:asmx?wsdl | inurl:jws?wsdl | intitle:_vti_bin/sites.asmx?wsdl | inurl:_vti_bin/sites.asmx?wsdl`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "security_headers":
            searchQuery = `${url}`;
            searchUrl = `https://securityheaders.com/?q=${encodeURIComponent(searchQuery)}&followRedirects=on`;
            break;
          case "detect_cms":
            searchQuery = `${url}`;
            searchUrl = `https://whatcms.org/?s=${encodeURIComponent(searchQuery)}`;
            break;
          case "broken_domain":
            searchQuery = `${url}`;
            searchUrl = `https://member.expireddomains.net/domain-name-search/?q=${encodeURIComponent(searchQuery)}&searchinit=10000`;
            break;
          case "digital_ocean_space":
            searchQuery = `site:digitaloceanspaces.com "${url}"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "source_code_publicwww":
            searchQuery = `${url}`;
            searchUrl = `https://publicwww.com/websites/%22${encodeURIComponent(searchQuery)}%22/`;
            break;
          // Additional
          case "form_intext":
            searchQuery = `site:${url} intext:"first name" | intext:firstname | intext:submit | intext:contact | intext:"Is this article helpful" | intext:feedback | intext:"Demo Request"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "form_intitle":
            searchQuery = `site:${url} intitle:submit | intitle:contact | intitle: submit | intitle:feedback | intitle:survey | intitle:form | intitle:"fill up"`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "form_inurl":
            searchQuery = `site:${url} inurl:contact | inurl:feedback | inurl:survey | inurl:form`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "register_signup":
            searchQuery = `site:${url} intitle:signup | intitle:register | intext:signup | intext:"sign up" | intext:register | intext:username | inurl:signup | inurl:register`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          case "contact_us":
            searchQuery = `site:${url} intitle:contact | intext:"contact us" | intext:survey | intitle:survey`;
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            break;
          default:
            alert("Invalid scan type.");
            return;
        }

        window.open(searchUrl, '_blank');
      }