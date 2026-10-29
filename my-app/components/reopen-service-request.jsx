"use-client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {reopenOwnServiceRequest} from "@/actions/bookingRequest";

export function ReopenServiceRequest({requestId}){
  const router = useRouter();
  const [description, setDesciption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(event) =>{
    event.preventDefault();
    const recurringIssue = description.trim();
    if(recurringIssue.length < 10){
      toast.error("Please describe the recurring issue in at least 10 characters");
      return;
    }
    if(recurringIssue.length > 2000){
      toast.error("Description must be 2000 characters or fewer");
      return;
    }

    const formData = new FromData();
    formData.set("requestId", requestId);
    formData.set("description", recurringIssue);
    setLoading(true);
    try{
      await reopenOwnServiceRequest(formData);
      setDesciption("");
      toast.success("Your service request has been reopened");
      router.refresh();
    } catch(error){
      toast.error(error?.message || "Could not reopen the service request");
    } finally{
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 rounded-lg border border-orange-900/30 bg-orange-950/10 p-3">
      <label htmlFor={`reopen-${requestId}`} className="text-sm font-semibold text-white">
        Report the recurring issue
        </label>
        <Textarea 
        id={`reopen-${requestId}`}
        value={description}
        onChange={(event) => setDesciption(event.target.value)}
        placeholder="Describe what happend after the repair..."
        minLength={10}
        maxLength={2000}
        required
        disabled={loading}
        aria-describedby={`reopen-help-${requestId}`}
        />
        <p id={`reopen-help-${requestId}`} className="text-xs text-muted-foreground">
          10-2000 characters. This will reopen the same request and keep its repair history.
          </p>
          <Button type="submit" size="sm" disabled={loading || description.trim().length < 10}>
            {loading ? "Reopening...":"Reopen Reuqest"}
          </Button>
    </form>
  );
}