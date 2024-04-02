

export const formatDate = (dateString) => {

    try {
        if(dateString){


            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            });
            return formattedDate;
        }
        return dateString;
    } catch (error) {
        console.warn(error);
        return "";
    }
}

export const doesOverlap = (s1, e1, s2, e2) => {
    try {
        const start1 = new Date(s1);
        const end1 = new Date(e1);
        const start2 = new Date(s2);
        const end2 = new Date(e2);
        var e1start = start1.getTime();
        var e1end = end1.getTime();
        var e2start = start2.getTime();
        var e2end = end2.getTime();

        return ((e1start >= e2start && e1start < e2end )|| 
            (e2start >= e1start && e2start <e1end))
    } catch (error) {
        console.warn(error);
        return false;
    }
  
}