// var repeat=function(n)
n="abacdedbc"
    n=n.split("")
    for(i=0;i<n.length;i++)
    {
        var count=0
        for(j=0;j<n.length;j++)
        {
            if(n[i]==n[j])
            {
                count++
                // console.log("hi")
            }
        }

        if(count<2)
        {
            result = n[i];
            break;
        }
    }
        console.log(result);
