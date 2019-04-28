<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width" />
    <title>Russell Ramey / Double R Creative</title>
    <meta name="description" content="Front-end design &amp; web development. New site coming soon..."/>

	<meta http-equiv="refresh" content="1;url=http://<?php echo $_GET['url']; ?>" />

    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,700' rel='stylesheet' type='text/css'>

    <!-- Styles -->
    <style>
        body{
            font-family: 'Roboto', helvetica, arial, sans-serif;
            font-weight: 300;
            line-height: 1.4em;
            font-size:16px;
            color: #555;
            background: #f4f4f4;
        }
        a{
            color:#ccc;
            padding-bottom: 5px;
            border-bottom:2px solid #eeeeee;
            text-decoration: none;
        }
        #wrapper{
            text-align: center;
            padding:15% 0;
        }
    </style>
</head>
<body>

    <div id="wrapper">
        <img src="../images/rr_logo.svg" width="50" height="50"  />

        <?php if($_GET['url'] == 'russellramey.me/assets/files/RussellRamey_Resume.pdf'){
            echo '<p>Your download will begin shortly...</p>';
        } else { ?>
            <p>You are currently being redirected to... <br /><b><?php echo $_GET['url']; ?></b></p>
        <?php } ?>

    </div>



<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-82133410-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>
