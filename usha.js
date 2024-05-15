<script>
    document.getElementById("resultForm").addEventListener("submit", function(event){
        var rollNumber = document.getElementById("rollNumber").value;
        document.getElementById("result").innerText = "Result for Roll Number " + rollNumber + ": Pass";
    });
</script>