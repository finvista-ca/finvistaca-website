import os
import re

universal_faqs = [
    '{ q: "How long does this process typically take?", a: "The timeline varies based on government processing times and document readiness, but we ensure the fastest turnaround possible by reviewing all documents meticulously before submission." }',
    '{ q: "What documents are required to initiate the service?", a: "We typically require standard KYC documents (PAN, Aadhaar) along with specific business proofs. Our team provides a tailored checklist upon consultation." }',
    '{ q: "Is the entire process online?", a: "Yes, the process is completely digital. You can submit your documents online, and we will handle all filings and communications remotely for your convenience." }',
    '{ q: "Are there any hidden charges?", a: "No, Finvista believes in complete transparency. Our quoted professional fees are inclusive of all standard advisory, and any government fees are communicated upfront." }',
    '{ q: "Will I get ongoing support after completion?", a: "Absolutely! Our team provides continuous support and updates on any compliance or regulatory changes affecting your business." }',
    '{ q: "Do you provide consultations before starting?", a: "Yes, we offer an initial consultation to understand your specific business needs and suggest the most compliant and tax-efficient solutions." }'
]

directory = "src/pages/services"

for f in os.listdir(directory):
    if f.endswith(".tsx"):
        path = os.path.join(directory, f)
        with open(path, "r", encoding="utf-8") as file:
            content = file.read()
        
        # Count existing FAQs
        existing_faqs_count = len(re.findall(r"\{\s*q:", content))
        
        if existing_faqs_count < 5:
            faqs_needed = 5 - existing_faqs_count
            faqs_to_add = universal_faqs[:faqs_needed]
            
            # Find the faqs array in the content
            # It looks like: faqs: [ ... ]
            # We want to insert our new faqs before the closing bracket.
            
            # Use regex to find the faqs array content
            match = re.search(r'(faqs:\s*\[)([\s\S]*?)(\])', content)
            if match:
                prefix = match.group(1)
                existing_items = match.group(2)
                suffix = match.group(3)
                
                # Check if existing items ends with a comma, or if it's completely empty
                existing_items = existing_items.strip()
                if existing_items and not existing_items.endswith(','):
                    existing_items += ',\n      '
                elif not existing_items:
                    existing_items = '\n      '
                
                new_items_str = ',\n      '.join(faqs_to_add) + '\n    '
                
                new_faqs_block = f"{prefix}{existing_items}{new_items_str}{suffix}"
                
                new_content = content[:match.start()] + new_faqs_block + content[match.end():]
                
                with open(path, "w", encoding="utf-8") as file:
                    file.write(new_content)
                print(f"Added {faqs_needed} FAQs to {f}")
